import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddWorker = () => {
    const [enteredWorkerName,SetEnteredWorkerName] =useState("");
    const [enteredWage,SetEnteredWage] =useState("");
    const MiniWage = 5000
 const addWorkerHandler= (e) =>{
        e.preventDefault();
        if(enteredWorkerName.trim().length ===0 ||
        enteredWage.trim().length===0 ) 
         {
            return;
        }
        if (+enteredWage<MiniWage) {
            return
            
        }
        SetEnteredWorkerName("");
        SetEnteredWage("");
        console.log(enteredWorkerName,enteredWage);

    }
  return (
    <div>
        <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label className="font-medium" htmlFor="name">
          Çalışan İsmi
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="text"
          placeholder="Çalışan İsmi Giriniz"
          id="name"
          onChange={(e)=>SetEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="number"
          placeholder="Maaş Giriniz"
          id="wage"
          onChange={(e)=>SetEnteredWage(e.target.value)}
          value={enteredWage}
        />
       <Button className="mt-2" type="submit">Ekle</Button>
      </form>
        </Card>
        
        
    </div>
  );
};

export default AddWorker;
