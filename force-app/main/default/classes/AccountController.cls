public  class AccountController {
   
          @AuraEnabled(cacheable=true)
         public static List<account> getAccounts() 
        {  
             list<account> accountList = [select id,name,phone from account limit 10];
             return accountList;
        }
             
}