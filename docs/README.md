---
pageClass: home-page
# some data for the components

name: Yuxuan Liang
profile: /liangyuxuan.jpg

bio: School of Physical Sciences, University of Science and Technology of China
email: liangyuxuan@mail.ustc.edu.cn
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a senior student in the School of Physical Sciences, University of Science and Technology of China (USTC). My major is Photoelectric Information Science and Engineering and I am expected to get my Bachelor of Science degree in Physics in July, 2022. Now, I am actively applying to graduate programs in USA and Europe to further my studies. My research interests lie in the area of integrating physics and artificial intelligence technologies to solve life and healthcare problems.

## News

- [Sept 2021] Start building the all-optical quantum tensor network system in Prof. Xu's lab
- [August 2021] Start this homepage
- [May 2021] Start summer internship (remote) at the [AI-based X-ray Imaging System (AXIS) lab](https://wang-axis.github.io/), Rensselaer Polytechnic Institute (RPI), supervised by [Prof. Ge Wang](https://biotech.rpi.edu/centers/bic/people/faculty/ge-wang)

## Education

- **School of Physical Sciences, University of Science and Technology of China** <br/> 
Sept 2018 - present

## Projects (Continuously updating)

[→ Full list](/projects/)

<ProjectCard image="/projects/phase.jpg" hideBorder=true>

  **Data-driven machine learning for estimation of phase function in anisotropic media**

  Supervised by [Prof. Ge Wang](https://biotech.rpi.edu/centers/bic/people/faculty/ge-wang), RPI
  
  Objective:

  Motivation:

  Methods:

  Results:
  
  [[Preliminary Results](https://github.com/liangyuxuan1/phasefunction)]  [[Code and Results](https://github.com/liangyuxuan1/phasefunction2)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **Manuscript in preparation**
  
  Descriptions will be updated soon.

</ProjectCard>

## Acknowledgement

My homepage uses the [vuepress-homepage](https://github.com/mtobeiyf/vuepress-homepage) template. Thanks to the author [Xin Fu](https://imfing.com/).

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
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
