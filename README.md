### 安装

```
pnpm i
```

#### 开发

```
pnpm --filter='./main-app'  --filter='./child-apps/*' --parallel run dev
```

#### 访问

默认访问主应用的 `8800` 端口，非微前端下子应用为 `8810`
