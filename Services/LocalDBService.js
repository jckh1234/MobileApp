import Expo, { SQLite } from 'expo';

const db = SQLite.openDatabase({ name: 'db.db' });

class LocalDBService{

	_createAccountTableIfNotExist(){
		db.transaction(tx => {
		  tx.executeSql(
		    'create table if not exists accounts (id integer primary key not null, account text, secret varchar(255), system varchar(255), last_login_browser varchar(255), last_login_os varchar(255), last_login_location varchar(255), last_login_time datetime);',
		    null,
		    (t,result) => {
		      console.log("create table success");
		    },
		    (t, error)=>{
		      console.log("create table failed");
		    }
		  );
		});
	}


	_readAccountTable(successCallback, failedCallback){
		db.transaction(tx => {
		  tx.executeSql('select * from accounts',
		    null, 
		    (t, { rows }) =>{
		      console.log("logging read db");
		      successCallback();
		    },
		    (t, error)=>{
		      console.log("logging read db fail");
		      failedCallback();
		    }
		  );
		});
	}


	_insertIntoAccountTable(data, successCallback, failedCallback){
		db.transaction(
		  tx => {
		    tx.executeSql("insert into accounts (account, secret, system, last_login_browser, last_login_os, last_login_location,last_login_time) values ('accounta', 'secreta', 'systema', 'last_login_browsera', 'last_login_osa', 'last_login_locationa', '2007-01-01 10:00:00')",
		      null,
		      (t,result) => {
		        console.log("logging insert db");
		        successCallback();
		      },
		      (t, error)=>{
		        console.log("logging insert db fail");
		        failedCallback();
		      }
		    );
		  }
		);
	}

}

module.exports.LocalDBService = new LocalDBService();