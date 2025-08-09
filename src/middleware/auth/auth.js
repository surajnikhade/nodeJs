const authenticate = (req, res, next) => {

    const token = 'xyz';
    const isAuthenticated = 'xyz' === token;
    if (!isAuthenticated) {
        res.status(401).send("Unauthorized");
    }
    else {
        console.log("User is authenticated");
        next();
    }

}
module.exports = {
    authenticate
}