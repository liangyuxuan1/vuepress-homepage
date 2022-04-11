---
pageClass: home-page
# some data for the components

name: Yuxuan Liang

profile: /liangyuxuan.jpg

bio: School of Physical Sciences, University of Science and Technology of China

email: liangyuxuan@mail.ustc.edu.cn
---

<ProfileSection :frontmatter="$page.frontmatter" />

### About Me

I am a senior student in the School of Physical Sciences, University of Science and Technology of China (USTC). My major is Photoelectric Information Science and Engineering and I am expected to get my Bachelor of Science degree in Physics in July, 2022. Now, I am actively applying to graduate programs in USA and Europe to further my studies. My research interests lie in the area of integrating physics and artificial intelligence technologies to solve life and healthcare problems.

[Feb. 19, 2022] I am very excited to have been admitted to Rensselaer Polytechnic Institute. I will start my PhD at the Biomedical Imaging Center of the Department of Biomedical Engineering in August 2022, under the joint supervision of Professors [Ge Wang](https://faculty.rpi.edu/ge-wang) and [Pingkun Yan](https://faculty.rpi.edu/pingkun-yan). 

### News
- [Mar. 5, 2022] Our PhaseNet paper is accepted by PMB.
- [Oct. 27, 2021] Phase function estimation paper submitted to *Physics in Medicine & Biology*
- [Sept 2021] Start building the all-optical quantum tensor network system in Prof. Xu's lab, [CAS Key Laboratory of Quantum Information](http://lqcc.ustc.edu.cn/), USTC
- [August 2021] Start this homepage
- [May 2021] Start summer internship (remote) at the [AI-based X-ray Imaging System (AXIS) lab](https://wang-axis.github.io/), Rensselaer Polytechnic Institute (RPI), supervised by [Prof. Ge Wang](https://biotech.rpi.edu/centers/bic/people/faculty/ge-wang)

### Education

- **School of Physical Sciences, University of Science and Technology of China** <br/> 
Sept 2018 - present

### Projects [→ Full list](/projects/)

<!--ProjectCard image="/projects/phase2.png" hideBorder=true -->
<ProjectCard>

  **Estimation of phase function from diffuse reflectance images by deep convolutional neural networks**

  Summer intern project, supervised by [Prof. Ge Wang](https://biotech.rpi.edu/centers/bic/people/faculty/ge-wang), Rensselaer Polytechnic Institute, USA
  
  <p align="center">
    <img src="/projects/phase1.png" alt="" width="60%">
  </p>  

  **Motivation**: The phase function plays an important factor in light propagation models especially for Monte Carlo (MC) simulation, which is usually represented by an empirical function with unknown parameters. In recent years, there have been some studies using machine learning methods to estimate the parameters of phase functions, but to our knowledge, no studies have attempted to estimate their form directly. 

  **Methods**: We propose an inverse MC model based on convolutional neural networks to directly estimate the form of the phase function from diffuse reflectance images. A Gaussian mixture model-based phase function representation scheme is presented, which does not significantly increase the free parameters and provides the analytic expression of phase function to facilitate deflection angle sampling in MC simulations.

  **Results**: The proposed method is validated on MC-simulated reflectance images of typical biological tissues using the Henyey-Greenstein phase function with different anisotropy factors. The best mean squared error of the phase function is 0.010 and the best relative error of the anisotropy factor is 3.280\%. The effects of field of view (FOV) and spatial resolution are analyzed. The results suggest that the learning task becomes more difficult when using a larger FOV or higher resolution, and may require a more elaborate network model design and more training data.
   

</ProjectCard>

### Publications

  Yuxuan Liang, Chuang Niu, Chen Wei, Shenghan Ren, Wenxiang Cong and Ge Wang, Phase function estimation from a diffuse optical image via deep learning, *Physics in Medicine & Biology*, 67(7):074001, 2022. [[Code](https://github.com/liangyuxuan1/phasefunction2)] [[paper](https://iopscience.iop.org/article/10.1088/1361-6560/ac5b21)]

### Acknowledgement

My homepage uses the [vuepress-homepage](https://github.com/mtobeiyf/vuepress-homepage) template. Thanks to the author [Xin Fu](https://imfing.com/).

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 16px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height 1.5
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>