(()=>{"use strict";const t=new class{constructor(t,e,s,i){this._id=crypto.randomUUID(),this._title=t,this._desc=e,this._dueDate=s,this._priority,this._completed=!1}get id(){return this._id}set title(t){this._title=t}get title(){return this._title}set desc(t){this._desc=t}get desc(){return this._desc}set dueDate(t){this._dueDate=t}get dueDate(){return this._dueDate}set priority(t){this._priority=t}get priority(){return this._priority}set completed(t){this._completed=t}get completed(){return this._completed}}("title","some odd description",new Date);console.log(t),console.info("this is an info message"),console.warn("this is a warning message"),console.error("this is an error message"),console.log(`${t.title} was deleted successfully`)})();