"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        //TODO Define
    };
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert('Your account was successfully created.');
            _this.toggleDisplay();
        }, function () {
            alert('Unfortunately we were unable to create your account.');
        });
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    Object.defineProperty(AppComponent.prototype, "submitText", {
        get: function () {
            return this.isLoggingIn ? 'Sign in' : 'Sign up';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "signUpText", {
        get: function () {
            return this.isLoggingIn ? 'Sign Up for Groceries' : 'Back to login';
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: './pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQXVDO0FBQ3ZDLDJEQUFzRDtBQVF0RCxJQUFhLFlBQVk7SUFHdkIsc0JBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRDNDLGdCQUFXLEdBQVMsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFDRSxhQUFhO0lBQ2YsQ0FBQztJQUNELDZCQUFNLEdBQU47UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQztZQUNBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0JBQUksb0NBQVU7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFDLFNBQVMsR0FBQyxTQUFTLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBVTthQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsdUJBQXVCLEdBQUMsZUFBZSxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBQywwQkFBMEI7UUFDdEMsU0FBUyxFQUFDLENBQUMsOEJBQThCLEVBQUMsdUJBQXVCLENBQUM7UUFDbEUsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztLQUN4QixDQUFDO3FDQUlnQywwQkFBVztHQUhoQyxZQUFZLENBbUN4QjtBQW5DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vc2hhcmVkL3VzZXIvdXNlcidcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOicuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwnICxcbiAgc3R5bGVVcmxzOltcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXSxcbiAgcHJvdmlkZXJzOltVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdXNlcjpVc2VyO1xuICBpc0xvZ2dpbmdJbjpib29sZWFuPXRydWU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2Upe1xuICAgIHRoaXMudXNlcj1uZXcgVXNlcigpO1xuICB9XG4gIHN1Ym1pdCgpe1xuICAgIGlmKHRoaXMuaXNMb2dnaW5nSW4pe1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG4gIGxvZ2luKCl7XG4gICAgLy9UT0RPIERlZmluZVxuICB9XG4gIHNpZ25VcCgpe1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZSgoKT0+e1xuICAgICAgICBhbGVydCgnWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC4nKTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICB9LCgpPT57XG4gICAgICAgIGFsZXJ0KCdVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuJylcbiAgICAgIH0pO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luZ0luPSF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG4gIGdldCBzdWJtaXRUZXh0KCl7XG4gICAgcmV0dXJuIHRoaXMuaXNMb2dnaW5nSW4/J1NpZ24gaW4nOidTaWduIHVwJztcbiAgfVxuICBcbiAgZ2V0IHNpZ25VcFRleHQoKXtcbiAgICByZXR1cm4gdGhpcy5pc0xvZ2dpbmdJbj8nU2lnbiBVcCBmb3IgR3JvY2VyaWVzJzonQmFjayB0byBsb2dpbic7XG4gIH1cbn0iXX0=