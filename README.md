# wolfpup


Output samples

Input: 4+5-5-5-5+4+4+4

Output:

<OMA>
	<OMS cd='arith1' name='plus'/>
	<OMA>
		<OMS cd='arith1' name='minus'/>
		<OMA>
			<OMS cd='arith1' name='minus'/>
			<OMA>
				<OMS cd='arith1' name='minus'/>
				<OMA>
					<OMS cd='arith1' name='plus'/>
					<OMI>4</OMI>
					<OMI>5</OMI>
				</OMA>
				<OMI>5</OMI>
			</OMA>
			<OMI>5</OMI>
		</OMA>
		<OMI>5</OMI>
	</OMA>
	<OMI>4</OMI>
	<OMI>4</OMI>
	<OMI>4</OMI>
</OMA>


Input: 4+5*6*7-4-3

Output:

<OMA>
	<OMS cd='arith1' name='minus'/>
	<OMA>
		<OMS cd='arith1' name='minus'/>
		<OMA>
			<OMS cd='arith1' name='plus'/>
			<OMI>4</OMI>
			<OMA>
				<OMS cd='arith1' name='times'/>
				<OMA>
					<OMS cd='arith1' name='times'/>
					<OMI>5</OMI>
					<OMI>6</OMI>
				</OMA>
				<OMI>7</OMI>
			</OMA>
		</OMA>
		<OMI>3</OMI>
	</OMA>
	<OMI>4</OMI>
	</OMA>




























