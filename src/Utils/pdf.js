import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (gloceryItems, user, isUser) => {

  const doc = new jsPDF();
  let startYTable = 15;

  if(isUser) {
    doc.setTextColor('black')
    doc.setFontSize(14)
    doc.text(user.userName, 15, 15)
    doc.text('Date of Birth: '+user.dateString,15,20)
    doc.text(user.streetAddress+', '+user.city+',',15,25)
    doc.text(user.state+', '+user.country+' Post Code: '+user.postcode,15,30)
    doc.text('Email: '+user.email,15,35)
    doc.text('Phone Number: '+user.phone+' Cell Number: '+user.cell, 15, 40)
    startYTable = 50;
  }

  doc.text("Bill",80,startYTable-5,{align:"center"})
  const tableColumn = ["Item Name", "Quantity", "Price", "Amount"];
  const tableRows = [];
  let netTotal = 0;
  gloceryItems.forEach(_gloceryItem => {
      netTotal += _gloceryItem.amount
  });

  gloceryItems.forEach(_gloceryItems => {
    const itemData = [
        _gloceryItems.item,
        _gloceryItems.quantity,
        'Rs.'+_gloceryItems.price,
        'Rs.'+_gloceryItems.amount
    ];
    tableRows.push(itemData);
  });
  tableRows.push(['','','Net Price','Rs.' + netTotal])
  doc.autoTable(tableColumn, tableRows, { startY: startYTable });
  //doc.text(`${netTotal}`, 40,40);
  doc.save(`Invoice.pdf`);
};

export default generatePDF;