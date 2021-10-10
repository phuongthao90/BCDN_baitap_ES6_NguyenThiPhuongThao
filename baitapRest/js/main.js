tinhDTB = (...diem) => {
    let sum= diem.reduce((pre,cur)=>{
        return parseFloat(pre) + parseFloat(cur)
    })
    return (sum/diem.length).toFixed(2);
}
//console.log(tinhDTB(1,2,3));

//Tính điểm trung bình khối 1
tinhDTB1 = () => {
    let diemToan = document.getElementById('inpToan').value;
    let diemLy = document.getElementById('inpLy').value;
    let diemHoa = document.getElementById('inpHoa').value;
         
     document.getElementById('tbKhoi1').innerHTML = tinhDTB(diemToan, diemLy, diemHoa);
}
document.getElementById('btnKhoi1').onclick = tinhDTB1;


//Tính điểm trung bình khối 2
tinhDTB2 = () => {
    let diemVan = document.getElementById('inpVan').value;
    let diemSu = document.getElementById('inpSu').value;
    let diemDia = document.getElementById('inpDia').value;
    let diemEnglish = document.getElementById('inpEnglish').value;
     
     document.getElementById('tbKhoi2').innerHTML = tinhDTB(diemVan, diemSu, diemDia,diemEnglish);
}
document.getElementById('btnKhoi2').onclick = tinhDTB2;
