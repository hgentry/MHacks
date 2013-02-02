var tape = "a   ";
var state = 0;
var head = 0;
var running = 0;
var accept = -1;
var reject = -2;
var steps = 0;
var tapeAlphabet = [' ','a','b','c','d','A','B','C','D','_'];
var machineCode = [];

function startMachine()
{
	machineCode = [];
	readMachineCode();
	document.getElementById('result').innerHTML = "NOT DONE";
	tape = document.getElementById('input').value;
	head = 0;
	state = 0;
	steps = 0;
	refreshDisplay();
	
	window.clearInterval(running);
	running = setInterval(function(){runItYo()}, 10);
}

function stopMachine()
{
	window.clearInterval(running);
	running = 0;
}


transition.prototype.nextState = 0;
transition.prototype.nextWrite = 0;
transition.prototype.dir = 0;
function transition(s, c)
{
	this.nextState = machineCode[s][tapeAlphabet.indexOf(c)][2];
	this.nextWrite = machineCode[s][tapeAlphabet.indexOf(c)][3];
	this.dir = machineCode[s][tapeAlphabet.indexOf(c)][4];
}

function updateConfiguration()
{
	steps++;
	var nextTrans = new transition(state, tape[head]);
	tape = tape.substring(0,head) + nextTrans.nextWrite + tape.substring(head+1);
	state = nextTrans.nextState;
	head += eval(nextTrans.dir);
	if(head >= tape.length)
	{
		tape += "   ";
	}
	
	if(state == accept)
	{
		document.getElementById('result').innerHTML = "ACCEPT";
		stopMachine();
	}
	if(state == reject)
	{
		document.getElementById('result').innerHTML = "REJECT";
		stopMachine();
	}
}


function refreshDisplay()
{
	var headString = '';
	for(i = 0; i < head; i++) headString += "&nbsp;";
	headString += "H";
	
	document.getElementById('head').innerHTML = headString;
	document.getElementById('tape').innerHTML = tape;
	document.getElementById('result').innerHTML = "NOT DONE: STATE " + state + " STEP " + steps;
}

function readMachineCode()
{
	var codeString = document.getElementById('code').value;
	var curState = 0;
	var curPos = 0;
	machineCode.push([]);
	while(codeString.length > 2)
	{
		while(curPos < tapeAlphabet.length)
		{
			var curTrans = [];
			curTrans.push(codeString.substring(0,codeString.indexOf(',')));
			codeString = codeString.substring(codeString.indexOf(',')+1);
			
			curTrans.push(codeString.substring(0,codeString.indexOf(',')));
			codeString = codeString.substring(codeString.indexOf(',')+1);
			
			curTrans.push(codeString.substring(0,codeString.indexOf(',')));
			codeString = codeString.substring(codeString.indexOf(',')+1);
			
			curTrans.push(codeString.substring(0,codeString.indexOf(',')));
			codeString = codeString.substring(codeString.indexOf(',')+1);
			
			curTrans.push(codeString.substring(0,codeString.indexOf(',')));
			codeString = codeString.substring(codeString.indexOf(',')+1);
			
			machineCode[curState].push([curTrans[0],curTrans[1],curTrans[2],curTrans[3],curTrans[4]]);
			curPos++;
		}
		curPos = 0;
		curState++;
		machineCode.push([]);
	}
}

function runItYo()
{
	updateConfiguration();
	if(state >= 0)
	refreshDisplay();
}