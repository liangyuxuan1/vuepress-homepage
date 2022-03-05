---
pageClass: projects-page
---

# Projects


<ProjectCard>

  **Estimation of phase function from diffuse reflectance images by deep convolutional neural networks**

  **Data-driven machine learning for estimation of phase function in anisotropic media**
  
  Summer intern project, May 2021 - Sept. 2021

  <p align="center">
    <img src="/projects/phase1.png" alt="" width="80%">
  </p>  
  
  - **Motivation**: The phase function plays an important factor in light propagation models especially for Monte Carlo (MC) simulation, which is usually represented by an empirical function with unknown parameters. In recent years, there have been some studies using machine learning methods to estimate the parameters of phase functions, but to our knowledge, no studies have attempted to estimate their form directly.  
  - **Methods**: We propose an inverse MC model based on convolutional neural networks to directly estimate the form of the phase function from diffuse reflectance images. A Gaussian mixture model-based phase function representation scheme is presented, which does not significantly increase the free parameters and provides the analytic expression of phase function to facilitate deflection angle sampling in MC simulations.
  - **Results**: The proposed method is validated on MC-simulated reflectance images of typical biological tissues using the Henyey-Greenstein phase function with different anisotropy factors. The best mean squared error of the phase function is 0.010 and the best relative error of the anisotropy factor is 3.280\%. The effects of field of view (FOV) and spatial resolution are analyzed. The results suggest that the learning task becomes more difficult when using a larger FOV or higher resolution, and may require a more elaborate network model design and more training data.
  - **Publication**:   Yuxuan Liang, Chuang Niu, Chen Wei, Shenghan Ren, Wenxiang Cong and Ge Wang, Phase function estimation from a diffuse reflectance image via deep learning, *Physics in Medicine & Biology*, in press.  [[Code](https://github.com/liangyuxuan1/phasefunction2)] [[arXiv](http://export.arxiv.org/abs/2111.08227)]

</ProjectCard>


<ProjectCard>

  **Study on All-Optical Quantum Tensor Network**

  Lab intern project, Mar 2021 – Present
     
  Advisor: [Prof. Xiaoye Xu](https://www.researchgate.net/profile/Xiao-Ye-Xu), [CAS Key Laboratory of Quantum Information](http://lqcc.ustc.edu.cn/), USTC
  
  - Tensor network (TN) is used to describe quantum states with only a polynomial (in the number of subsystems) number of parameters. We are devising an all-optical scheme for the generation of TN states in one and higher dimensions, which can be used in quantum computing and quantum communication.
  - Survey on methods of producing indistinguishable single phonons over a wide spectral range, and measuring the temporal and spatial distribution of an ultrashort pulse.
  
</ProjectCard>


<ProjectCard>

  **Study on Machine Learning-based Classification of Vector Vortex Beams**

  Course project, Sept 2020 - Jan 2021
     
  Advisor: [Prof. Xiaoping Tao](http://jxzy.ustc.edu.cn/show_staff.aspx?id=18) and [Prof. Quan Zhang](http://jxzy.ustc.edu.cn/show_staff.aspx?id=27), [Physics Experiment Teaching Center](http://jxzy.ustc.edu.cn/index.aspx), USTC
  
  - Orbital angular momentum (OAM) has theoretically allowed an infinite increase of the transmitted capacity. We used a machine learning method to precisely recognize OAM modes which is crucial to expand the communication capacity.
  - Simulated the intensity distribution after superposition of OAM beams with multiple fractional modes. The work was done by COMSOL Multiphysics.
  - Built the optical system and generated OAM beams with laser, beam expander, polarizer, lens, diaphragm and spatial light modulator.
  
</ProjectCard>


<style lang="stylus">

.projects-page
  background-color #fafbfc

</style>