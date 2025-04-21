<h3 align="center">
    <img src="assets/logo_svg.png" alt="Logo" style="vertical-align: middle; width: 55px; height: 55px;">
    DreamID: A Fast and High-Fidelity diffusion-based Face Swapping via Triplet ID Group Learning
</h3>

<p align="center"> 
<!-- <a href="https://github.com/bytedance/UNO"><img alt="Build" src="https://img.shields.io/github/stars/bytedance/UNO"></a>  -->
<a href="https://superhero-7.github.io/DreamID/"><img alt="Build" src="https://img.shields.io/badge/Project%20Page-DreamID-yellow"></a> 
<a href=""><img alt="Build" src="https://img.shields.io/badge/arXiv%20paper-DreamID-b31b1b.svg"></a>
<a href="https://jimeng.jianying.com/ai-tool/image/generate"><img alt="Build" src="https://img.shields.io/badge/Try Online-Dreamina-orange"></a> 
<!-- <a href="https://huggingface.co/bytedance-research/UNO"><img src="https://img.shields.io/static/v1?label=%F0%9F%A4%97%20Hugging%20Face&message=Model&color=orange"></a> -->
<!-- <a href="https://huggingface.co/spaces/bytedance-research/UNO-FLUX"><img src="https://img.shields.io/static/v1?label=%F0%9F%A4%97%20Hugging%20Face&message=demo&color=orange"></a> -->
</p>

<div align="center">
  <p>
    <a href="https://scholar.google.com/citations?user=-BbQ5VgAAAAJ&hl=en&oi=ao">Fulong Ye</a>, 
    <a href="https://scholar.google.com/citations?user=gvUL1ZoAAAAJ&hl=en">Miao Hua</a>, 
    <a href="https://github.com/PangzeCheung">Pengze Zhang</a>, 
    <a href="https://github.com/Crayon-Shinchan">Xinghui Li</a>, 
    <a href="https://github.com/sun631998316">Qichao Sun</a>, 
    <a href="https://crayon-shinchan.github.io/AnyDressing.github.io/">Songtao Zhao</a>, 
    <a href="https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&authuser=1&user=9rWWCgUAAAAJ">Qian He</a>, 
    <a href="https://scholar.google.com/citations?user=LVsp9RQAAAAJ&hl=zh-CN">XingLong Wu</a>
  </p>
</div>

><p align="center"> 
><span style="font-size: 16px">Intelligent Creation Team, ByteDance</span></p>


## 🔥 News
- [04/21/2025] 🔥 Our project [DreamID](https://superhero-7.github.io/DreamID/) is released.


## 📖 Introduction
We introduce DreamID, a high-similarity, fast, and high-fidelity diffusion-based face-swapping model. You can try out our model in <a href="https://jimeng.jianying.com/ai-tool/image/generate" target="_blank">Dreamina</a>.<br>

<p align="center">
<img src="./assets/teaser.png" width=95% height=95% 
class="center">
</p>

DreamID achieves high-fidelity face swapping with unprecedented identity similarity—to our knowledge, it currently ranks as the most identity-preserving face-swapping model. It addresses long-standing challenges in the field, such as facial shape deformation, while excelling in attribute preservation (e.g., makeup, lighting) at a fine-grained level. Moreover, DreamID demonstrates robust performance under occlusions and extreme head poses.


<!-- ### 📌 Tips and Notes
We integrate single-subject and multi-subject generation within a unified model. For single-subject scenarios, the longest side of the reference image is set to 512 by default, while for multi-subject scenarios, it is set to 320. UNO demonstrates remarkable flexibility across various aspect ratios, thanks to its training on a multi-scale dataset. Despite being trained within 512 buckets, it can handle higher resolutions, including 512, 568, and 704, among others.

UNO excels in subject-driven generation but has room for improvement in generalization due to dataset constraints. We are actively developing an enhanced model—stay tuned for updates. Your feedback is valuable, so please feel free to share any suggestions. -->

<!-- ## 🎨 Application Scenarios
<p align="center">
<img src="./assets/simplecase.jpg" width=95% height=95% 
class="center">
</p> -->

## 📄 Disclaimer
<p>
This research aims to advance the field of generative AI. Users are free to 
create images using this tool, provided they comply with local laws and exercise 
responsible usage. The developers are not liable for any misuse of the tool by users.</p>

<!-- ## 🚀 Updates -->

##  Citation
If DreamID is helpful, please help to ⭐ the repo.

If you find this project useful for your research, please consider citing our paper:
```bibtex

```