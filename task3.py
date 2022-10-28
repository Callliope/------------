import numpy as np
import matplotlib as plt
import matplotlib.pyplot as pl
fig,ax=pl.subplots()
x1 = np.linspace(0, 10, 20)
x2 = np.linspace(0, 10, 20)
pl.title(r'F(x1,x2) = (x1)1/2sin(x1)exp(cos(x2)')
y=(x1**(1/2))*np.sin(x1)*np.exp(np.cos(x2))
ax.plot(x1,x2,y)
pl.show()