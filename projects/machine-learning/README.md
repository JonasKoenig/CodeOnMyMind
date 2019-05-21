<!-- Header -->
[⬅️ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[💾 Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fmachine-learning)

# Machine Learning

Machine Learning is a part of the wider field of artificial intelligence (AI). It is an attempt to learn something from existing data (_training data_) and apply that knowledge to new data (_test data_).

In this project I aim to give you a glimpse of what machine learning is and what interesting challenges it tries to solve.

## What is it?

In science, _induction_ is the process of inferring general rules from lots of examples. Drop various items for example - we may then infer that things fall to the ground. We do not know that rule to be true, but it is the best theory that explains what we observed.

Machine learning tries to automate that inductive process. We write an algorithm that takes a lot of examples (input) and infers properties about them (output).

## Different Kinds

The different kinds of machine learning are distinguished by their input. Mainly, do we know the correct answer up front or not? In this section I explain applications and provide examples to make it easier to understand.

![Different kinds of machine learning](kinds.png)

### Supervised Learning

Example: We start with a lot of e-mails, that humans have labeled either _'spam'_ or _'no spam'_ beforehand. Knowing which are which, a learning algorithm can learn, what characterizes spam mail. After learning from the labeled training data, the algorithm can assign labels to new incoming mail and discard spam mail.

Generally speaking, supervised learning requires a dataset _including_ the information we are trying to learn. We need the correct output for every data input. We then try to link the input properties to their given output properties. The goal is to learn a function, that can predict the output property for any future input.

The following two applications of supervised learning are distinguished by their output.

- __Classification:__ Just like in the spam filter example above, the desired output is a label or category.

- __Regression__ is useful if the output is a number from a continuous range of values. Example: Try to guess the length of a persons finger by looking at their height.

I will supply you with coding examples for important algorithms such as [*k*-Nearest-Neighbors](knn/README.md) and Support Vector Machines (coming soon).

### Semi-Supervised Learning

Supervised learning requires labeled training data. But labeling by hand can be cumbersome and expensive.

If only a small excerpt of the training data is labeled we speak of semi-supervised learning. The challenge is to find meaningful groups and infer their properties by looking at only a hand full of representatives.

One famous instance of semi-supervised learning is 'Self-supervised learning model for skin cancer diagnosis'. A doctor classified a few pictures of moles as either benign or dangerous. The remaining unlabeled pictures were than split into groups. If there is one labeled representative for every group, all data is now classified.

### Unsupervised Learning

If we have no output information, we use unsupervised learning. The learning algorithm is supposed to provide insights into the structure of the data. Common applications are:

- __Clustering__ is about identifying meaningful groups in the data set. For example, find communities among single user profiles in a social network.

- __Dimensionality Reduction:__ Picture a fictional data set about dogs. It may include information about name, age and breed, but also less useful information, like the weather conditions on their third birthday. Reducing dimensionality means determining a few key characteristics, that are important to tell different dogs apart.

- __Anomaly Detection:__ In data preprocessing we may want to discard data, that is too far apart from the rest of the data. For example we measure the temperature of room over the course of a year. Now we want to ignore the day our intern made himself a coffee directly underneath the thermometer. Anomaly detection aims to identify such outliers.

*k*-Means is an algorithm similar to *k*-Nearest-Neighbors. I will have a code example ready soon.


### Batch, Online and Active Learning

This last paragraph is concerned with how we acquire the training data:

- __Batch:__ We receive a bunch of data, apply our algorithms and we are done.

- __Online:__ Data trickles in one at a time, e.g. in spam filtering.

- __Active:__ The algorithm has access to the whole data set and _'asks'_ for the output solution of certain data points.

These are some applications I have encountered and thought to be interesting. By no means is this list complete, but I hope I gave you an insight into the nebulous realm of machine learning. I will improve and expand upon this page as I go, so stay tuned.

## On a personal note ...

Machine learning is not voodoo. In my opinion it can be a useful tool in understanding data. I am just getting into this field and there are people working on machine learning, that are far smarter than me. Nevertheless there are a lot of problems to solve. We are no where near a general or super artificial intelligence, that will trigger the machine uprising and the end of human kind.

That being said, we are witnessing a process that could have serious implications for our society. My advice: Try to understand what computer scientists are talking about, ask critical questions and try to participate in shaping the future of this field.
