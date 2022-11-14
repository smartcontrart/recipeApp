USERS = [["user1","password1", "user1@email.com", "uid-user1", "NY"],
         ["user2","password2", "user2@email.com", "uid-user2", "NJ"],
         ["user3","password3", "user3@email.com", "uid-user3", "AK"]]

for x in USERS do
    User.create(username: x[0], password: x[1], email: x[2], uid: x[3], state: x[4])
end