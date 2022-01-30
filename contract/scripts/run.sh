echo ---------------------------------------------------------
echo "Example 1 : View Contract"
echo ---------------------------------------------------------

near view $CONTRACT helloWorld 

echo ---------------------------------------------------------
echo "Example 2 : Call Conract"
echo ---------------------------------------------------------
echo

near call $CONTRACT helloYou --accountId {NEAR_ACCOUNT}

