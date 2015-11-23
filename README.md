# wolfpup


Output samples

Input: 3

Output:

<OMI>4</OMI>

Input: 4+5

Output:

<OMA><OMS cd='arith1' name='plus'/><OMI>4</OMI><OMI>5</OMI></OMA>

Input: 4-5

Output:

<OMA><OMS cd='arith1' name='minus'/><OMI>4</OMI><OMI>5</OMI></OMA>

Input: 4.5

Output: <OMF dec='4.5'/>

Input: 4/5

Output:

<OMA style='mfrac'><OMS cd='arith1' name='divide'/><OMI>4</OMI><OMI>5</OMI></OMA>

Input: summation (0,infinity) x^n

Output:

<OMA><OMS cd='arith1' name='sum'/><OMA><OMS cd='interval1' name='integer_interval'/><OMI>0</OMI><OMS cd='nums1' name='infinity'/></OMA><OMBIND><OMS cd='fns1' name='lambda'/><OMBVAR><OMV name='n'/></OMBVAR><OMA><OMS cd='arith1' name='power'/><OMV name='x'/><OMV name='n'/></OMA></OMBIND></OMA>