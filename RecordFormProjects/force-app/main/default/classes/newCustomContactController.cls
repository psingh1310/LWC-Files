public with sharing class newCustomContactController {
    @AuraEnabled (cacheable=true)
    public static List<Contact> fetchContact(String accountId){
        try {
            return [SELECT Id, Name  FROM Contact Where accountId =: accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
