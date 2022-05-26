import {Service, ServiceBroker, Context} from "moleculer";

export default class UserRoute extends  Service{
    public constructor(broker: ServiceBroker) {
        super(broker);
        this.parseServiceSchema({
            name: "user",
            actions: {
                hello: {
                    rest: {
                        method: "POST",
                        path: "/"
                    },
                    async handler(): Promise<String>{
                        return this.create();
                    }
                }
            },
            methods: {
                create(): Object {
                    return {msg: "deu certo"} ;
                }
            }
        })
    }
}