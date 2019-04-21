import matplotlib.pyplot as plt
import seaborn as sns

iris = sns.load_dataset('iris')
iris.head()
sns.set()
sns.pairplot(iris, hue='species');
plt.show()
