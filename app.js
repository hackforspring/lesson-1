//ランダムな0~100の数
//0~100までの数値にしたいので、Math.randon() * 101にしています
//101の部分を変えると0~好きな数までの範囲にできます
const RandNum = Math.floor(Math.random() * 101);
var InputNum = 0;


const InputText = document.getElementById('input');
const EnterButton = document.getElementById('enter');
const message = document.getElementById('message');

EnterButton.addEventListener('click', function () {
    //文字列を整数の型に変換します
    //小数点がある場合は小数の部分を無視します
	InputNum = parseInt(InputText.value);
	//NaN (Not a Number、数字でない)がInputNumに入った時の処理
	if (InputNum == NaN) {
		message.innerText = "ちゃんと数を入力して!!";
	}
	//同じ数だった場合
	if (InputNum == RandNum) {
		message.innerText = '正解!! おめでとう!';

    //入力した数のほうが大きかった場合
	} else if (InputNum > RandNum) {
		message.innerText = 'もっと小さいよ';

    //入力した数のほうが小さかった場合
	} else if (InputNum < RandNum) {
		message.innerText = 'もっと大きいよ';
	}

}, false);

