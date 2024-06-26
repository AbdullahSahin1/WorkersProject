import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddWorker = () => {
    const [enteredWorkerName,SetEnteredWorkerName] =useState("");
    const [enteredWage,SetEnteredWage] =useState("");
    const MiniWage = 5000
 const addWorkerHandler= (e) =>{
        e.preventDefault();
     if(enteredWorkerName.trim().length ===0 ) 
         { 
            setError({
                title: 'İsim Alanı Zorunludur',
                message: 'Lütfen Bir İsim Giriniz',
            })
            return;
        }
        if (+enteredWage<MiniWage) {
            setError({
              title: 'Maaş alanı zorunludur',
              message: `Lütfen ${MiniWage} değerinden büyük bir maaş değeri giriniz `
            })
            return
            
        }
        SetEnteredWorkerName("");
        SetEnteredWage("");
       props.SetWorkers((prevState)=>[
          {
            id: Math.floor(Math.random() * 1000),
            name: enteredWorkerName,
            wage: enteredWage,
          },
          ...prevState
        console.log(enteredWorkerName,enteredWage);
     const errorHandler = () => {
      setError(null)
    }

    }
  return (
       {error && <ErrorModel onConfrim={errorHandler} error={error}></ErrorModel>}
    <React.Fragment>
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
        
        
    </React.Fragment>
  );
};

export default AddWorker;
