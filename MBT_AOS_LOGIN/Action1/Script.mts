AIUtil.SetContext Browser("creationtime:=5")
AIUtil("profile").Click
AIUtil("input", "Username").Type "Dominikg"
AIUtil("input", "Password").Type "Password1"
AIUtil.FindTextBlock("SIGN IN").Click
