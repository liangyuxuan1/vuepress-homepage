---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /liangyuxuan.jpg
head: 'Yuxuan Liang'
info: 'Senior student in the University of Science and Technology of China'
interests: 'Interests: Football.'
socials:
- title: github
  link: https://github.com/liangyuxuan1
- title: email
  link: 'mailto:liangyuxuan@mail.ustc.edu.cn'
actions:
- text: Projects
  link: /projects/
footer: Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I am a senior student in the School of Physical Sciences, University of Science and Technology of China (USTC). My major is Photoelectric Information Science and Engineering and I am expected to get my Bachelor of Science degree in Physics in July, 2022. Now, I am actively applying to graduate programs in USA and Europe to further my studies. My research interests lie in the area of integrating physics and artificial intelligence technologies to solve life and healthcare problems.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>