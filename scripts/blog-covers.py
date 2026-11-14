# Blog covers: one dot matrix per article, in the language of the hero's Europe map.
# Every cover is the same grid of dots on the site's dark ground; the subject is drawn by lighting
# some dots violet and a few white. Usage: python3 scripts/blog-covers.py <world-atlas countries-50m.json> public/assets/img/blog/covers
import json, math, sys, os

W, H, S = 1600, 1066, 18          # canvas and grid step
CX, CY = W / 2, H / 2
BASE, VIO, DIM, WHITE = 'rgb(141 132 255 / .13)', 'rgb(141 132 255 / .8)', 'rgb(141 132 255 / .38)', '#ffffff'

def seg(px, py, ax, ay, bx, by):
    dx, dy = bx - ax, by - ay
    t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy or 1)))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))

def rrect(px, py, x, y, w, h, r=0):
    qx = abs(px - (x + w / 2)) - (w / 2 - r); qy = abs(py - (y + h / 2)) - (h / 2 - r)
    return math.hypot(max(qx, 0), max(qy, 0)) + min(max(qx, qy), 0) - r   # signed distance

def render(name, shade, title):
    layers = {BASE: [], DIM: [], VIO: [], WHITE: []}
    ox, oy = (W % S) / 2 + S / 2, (H % S) / 2 + S / 2
    y = oy
    while y < H:
        x = ox
        while x < W:
            layers[shade(x, y) or BASE].append(f'M{x:.0f} {y:.0f}h0')
            x += S
        y += S
    paths = ''.join(f'<path stroke="{c}" d="{"".join(d)}"/>' for c, d in layers.items() if d)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="{title}">'
           '<defs><radialGradient id="g" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#6356e5" stop-opacity=".22"/>'
           '<stop offset="1" stop-color="#6356e5" stop-opacity="0"/></radialGradient></defs>'
           f'<rect width="{W}" height="{H}" fill="#12121b"/><rect width="{W}" height="{H}" fill="url(#g)"/>'
           f'<g fill="none" stroke-width="8.5" stroke-linecap="round">{paths}</g></svg>')
    open(os.path.join(OUT, name + '.svg'), 'w').write(svg)

# ---- 1. end-to-end encryption: a padlock, its keyhole in white
def lock(x, y):
    if rrect(x, y, 580, 470, 440, 340, 44) <= 0:
        if math.hypot(x - 800, y - 610) <= 42 or (abs(x - 800) <= 16 and 610 <= y <= 720): return WHITE
        return VIO
    d = math.hypot(x - 800, y - 470)
    if y <= 470 and 120 <= d <= 176: return VIO
    if 470 < y < 490 and 120 <= abs(x - 800) <= 176: return VIO
    return None

# ---- 2. hosting in France: France in violet dots, our servers a white point with two rings
def france_shade(topo_path):
    topo = json.load(open(topo_path)); sc, tr = topo['transform']['scale'], topo['transform']['translate']
    arcs = []
    for a in topo['arcs']:
        px = py = 0; pts = []
        for dx, dy in a:
            px += dx; py += dy; pts.append((px * sc[0] + tr[0], py * sc[1] + tr[1]))
        arcs.append(pts)
    g = next(g for g in topo['objects']['countries']['geometries'] if g.get('id') == '250')
    rings = []
    for poly in g['arcs']:
        pts = []
        for i in poly[0]:
            a = arcs[i] if i >= 0 else arcs[~i][::-1]; pts.extend(a if not pts else a[1:])
        if all(-6 < p[0] < 10 and 41 < p[1] < 52 for p in pts): rings.append(pts)   # metropolitan France and Corsica
    k = 700 / 10.5   # 10.5 degrees of latitude over 620px
    def to_geo(x, y):
        lat = 46.6 - (y - CY) / k
        return 2.4 + (x - CX) / k / math.cos(math.radians(46.6)), lat
    def inside(lon, lat, pts):
        c = False; j = len(pts) - 1
        for i in range(len(pts)):
            xi, yi = pts[i]; xj, yj = pts[j]
            if (yi > lat) != (yj > lat) and lon < (xj - xi) * (lat - yi) / (yj - yi) + xi: c = not c
            j = i
        return c
    sx, sy = CX + (2.6 - 2.4) * k * math.cos(math.radians(46.6)), CY - (46.4 - 46.6) * k
    def shade(x, y):
        d = math.hypot(x - sx, y - sy)
        if d <= 30: return WHITE
        if 64 <= d <= 82: return WHITE
        lon, lat = to_geo(x, y)
        return VIO if any(inside(lon, lat, r) for r in rings) else None
    return shade

# ---- 3. the status page: ninety days of uptime bars, one short day, and a heartbeat over them
def status(x, y):
    beat = [(180, 340), (640, 340), (700, 270), (770, 430), (830, 210), (890, 390), (940, 340), (1420, 340)]
    if any(seg(x, y, *beat[i], *beat[i + 1]) <= 14 for i in range(len(beat) - 1)): return WHITE
    if 180 <= x <= 1420 and 500 <= y <= 820:
        col = int((x - 180) / S)
        if col % 3 == 2: return None
        if col // 3 == 15: return WHITE if y >= 690 else None
        return VIO
    return None

# ---- 4. the new website: a browser window, its three dots, a headline block, lines and a picture
def site(x, y):
    X, Y, w, h = 340, 210, 920, 650
    r = rrect(x, y, X, Y, w, h, 34)
    if r > 0: return None
    if r > -30: return VIO
    if Y + 76 <= y <= Y + 100: return VIO
    if Y + 24 <= y <= Y + 56 and any(abs(x - (X + 56 + i * 40)) <= 14 for i in range(3)): return WHITE
    if X + 70 <= x <= X + 520 and Y + 150 <= y <= Y + 250: return WHITE
    if X + 70 <= x <= X + 460 and any(abs(y - r) <= 12 for r in (Y + 320, Y + 370, Y + 420)): return DIM
    if X + 70 <= x <= X + 260 and Y + 490 <= y <= Y + 550: return VIO
    if X + 580 <= x <= X + 850 and Y + 150 <= y <= Y + 580: return VIO
    return None

# ---- 5. Bun: a stopwatch, its hand a quarter turn on, the swept sector lit
def watch(x, y):
    cx, cy, R = 800, 590, 290
    d = math.hypot(x - cx, y - cy)
    if abs(x - cx) <= 34 and 250 <= y <= 310: return VIO
    if abs(x - cx) <= 76 and 210 <= y <= 250: return VIO
    if R - 40 <= d <= R: return VIO
    ang = (math.degrees(math.atan2(x - cx, cy - y)) + 360) % 360
    hand = 105
    hx, hy = cx + (R - 70) * math.sin(math.radians(hand)), cy - (R - 70) * math.cos(math.radians(hand))
    if seg(x, y, cx, cy, hx, hy) <= 14 or d <= 26: return WHITE
    if R - 90 <= d <= R - 62 and min(ang % 30, 30 - ang % 30) <= 4: return WHITE
    if d < R - 40 and ang <= hand: return DIM
    return None

# ---- 6. Chat Control: a sealed letter, and the line that would scan it
def letter(x, y):
    X, Y, w, h = 380, 290, 840, 540
    if abs(y - 520) <= 14 and 200 <= x <= 1400: return WHITE
    r = rrect(x, y, X, Y, w, h, 24)
    if r > 0: return None
    if r > -30: return VIO
    if seg(x, y, X, Y, CX, Y + 290) <= 14 or seg(x, y, X + w, Y, CX, Y + 290) <= 14: return VIO
    if math.hypot(x - CX, y - (Y + 290)) <= 60: return WHITE
    if y > Y + 290: return DIM if (int(x / S) + int(y / S)) % 2 == 0 else None
    return None

OUT = sys.argv[2]
os.makedirs(OUT, exist_ok=True)
render('chiffrement', lock, 'Un cadenas en points violets')
render('france', france_shade(sys.argv[1]), 'La France en points violets, un point blanc pour nos serveurs')
render('etat', status, 'Des barres de disponibilité et une ligne de pouls')
render('site', site, 'Une fenêtre de navigateur dessinée en points')
render('bun', watch, 'Un chronomètre en points, l’aiguille en blanc')
render('chat-control', letter, 'Une lettre scellée traversée par une ligne de balayage')
