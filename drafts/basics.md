# Basics

## Black bodies

As said on [Wikipedia](https://en.wikipedia.org/wiki/Planetary_equilibrium_temperature), the equilibrium temperature of an object is the theoretical temperature a planet would be at thermal equilibrium if it was a black body heated only by its parent star. What does this mean?

A [black body](https://en.wikipedia.org/wiki/Black_body) is like an idealized object that absorbs all light that hits it, regardless of its frequency, angle of incidence, or anything else. Most things in life (say, people) are not perfect black bodies, but stars and planets can be approximated well by them.

## Wien's Displacement Law

When a black body is in thermal equilibrium (i.e., constant temperature), it emits [black body radiation](https://en.wikipedia.org/wiki/Black-body_radiation). The shape and amount of radiation the black body emits depends *only* on the temperature of the black body. The wavelength at which the spectrum peaks is given by Wien's Displacement Law:

$$ \lambda_{max} = \dfrac{b}{T}$$

where $b$ is Wien's displacement constant (approximately $2.9 \times 10^{-3} \text{ m}\cdot\text{K}$) and $T$ is the temperature of the black body.

## Stefan-Boltzmann Law

When an object is in thermal equlibrium, the amount of energy entering the object per unit time has to equal the amount of energy leaving the object per unit time. The amount of energy black bodies lose per unit time (through black body radiation) is described by the Stefan-Boltzmann Law:

$$ P = A \sigma T^4$$

where $A$ is the surface area of the black body, $T$ is the temperature of the black body, and $\sigma$ is the Stefan-Boltzmann constant (approximately $5.67 \times 10^{-8} \text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$)

This quantity (energy per unit time) is known as **power** ($P$) and has units of Joules per second, or Watts. In astronomy, the power emitted by an object is generally called its **luminosity** ($L$).

Stars are spherical, so the surface area of a star would be $4 \pi R_{star}^2$. Using this, we can find the luminosity of a star using the Stefan-Boltzmann Law:

$$ L = 4 \pi R_{star}^2 \sigma T_{star}^4$$

When light leaves the Sun, it
