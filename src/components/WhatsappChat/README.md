# Component [WhatsappChat]


## 🚀 How to use

### WhatsappChat
```jsx
    import { WhatsappChat } from './components/WhatsappChatButton';

    const Example: FunctionComponent = () => {
        return (
            <WhatsappChat
            visible
            phone='5516999999999'
            pulse
            message='Preciso de ajuda com isso:'
            position='bottom-right'
            />
        );
    };

```

## 💻 Documentation

### WhatsappChat props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `visible`  | `boolean` | Option of Whatsapp Chat visibly `required` | `true`|
| `phone`  | `string` | DDI DDD PhoneNumber `required`| `5516999999999`|
| `pulse`  | `boolean` | Pulse button | `true`|
| `position`  | `PositionType` | Position Whatsapp Chat Button | `PositionType`|
| `message`  | `string` | Color icons | `Mensagem`|

- PositionType: `bottom-right`, `bottom-left`, `bottom-center` , `top-right`, `top-left`, `top-center` or `center`

## 🔖 Layout

<p align="center">
    

https://user-images.githubusercontent.com/15270961/157363574-3ad5183e-1694-429f-bbb9-0ca8c036f369.mov
    

</p>

## 👨🏻‍💻 Developers
- Gabriel Cintra


