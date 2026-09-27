"""宣传片背景音乐：复用 make_audio.py 里的八音盒 + 铺底和弦（代码合成，无版权问题）。
用法：python3 tools/promo_music.py <秒数> <输出.wav>"""
import os
import sys

import soundfile as sf

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
from make_audio import SR, make_music  # noqa: E402

total, out = float(sys.argv[1]), sys.argv[2]
sf.write(out, make_music(total, [0.0], set()) * 0.8, SR)
print(f"背景音乐：{out}（{total:.1f} 秒）")
