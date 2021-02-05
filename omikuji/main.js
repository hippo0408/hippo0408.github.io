'use strict';
{
    const btn=document.getElementById('btn');

    btn.addEventListener('click', () =>{
        const result=['スパオジ','大林','五味','２DK','堀助','部長',
        '荒木','さく','まっすー','テンボス','ryo','3110','2g','なべ','洋乳郎'
    ,'姉御','姫ちゃん','ばんどー','イナ','けん★','しんご','あっしゅ',
'フジヤ','まっち','松本'];
//const n =Math.floor(Math.random()*result.length);
        //btn.textContent=result[n];
        btn.textContent=result[Math.floor(Math.random()*result.length)];
    });
}