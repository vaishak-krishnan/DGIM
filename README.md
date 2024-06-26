# DGIM
# Implimentation of the `DGIM algorithm
# add your bitstream data on stream_data.txt
# Run index.html as live server.
# upload stream_data.txt.

# DGIM algorithm (Datar-Gionis-Indyk-Motwani Algorithm)
Designed to find the number 1’s in a data set. This algorithm uses O(log²N) bits to represent a window of N bits, allowing to estimate the number of 1’s in the window with an error of no more than 50%.

So this algorithm gives a 50% precise answer.

In DGIM algorithm, each bit that arrives has a timestamp for the position at which it arrives. If the first bit has a timestamp 1, the second bit has a timestamp 2 and so on. The positions are recognized with the window size N (the window sizes are usually taken as a multiple of 2). The windows are divided into buckets consisting of 1’s and 0's.

RULES FOR FORMING THE BUCKETS:
The right side of the bucket should always start with 1. (if it starts with a 0, it is to be neglected). E.g. · 1001011 → a bucket of size 4, having four 1’s and starting with 1 on its right end.
Every bucket should have at least one 1, else no bucket can be formed.
All buckets should be in powers of 2.
The buckets cannot decrease in size as we move to the left. (move in increasing order towards left).

Implemented by: Vaishak C Krishnan
M.Tech 2nd Semester - Department of Computer Science - CUSAT
Data Science and Artificial Intelligence