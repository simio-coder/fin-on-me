// Datos del menú
const menuData = [
    {
        id: 'dashboard',
        title: 'DASHBOARD',
        icon: 'tachometer-alt',
        items: ['resumen()', 'alertas()', 'métricas()', 'actividad_reciente()']
    },
    {
        id: 'ventas',
        title: 'VENTAS',
        icon: 'shopping-cart',
        items: ['nueva_venta()', 'historial()', 'clientes()', 'presupuestos()', 'reportes_ventas()']
    },
    {
        id: 'inventario',
        title: 'INVENTARIO',
        icon: 'boxes',
        items: ['productos()', 'categorias()', 'stock()', 'movimientos()', 'ajustes()']
    },
    {
        id: 'finanzas',
        title: 'FINANZAS',
        icon: 'dollar-sign',
        items: ['facturación()', 'pagos()', 'presupuesto()', 'impuestos()', 'reportes_financieros()']
    },
    {
        id: 'reportes',
        title: 'REPORTES',
        icon: 'chart-bar',
        items: ['ventas()', 'inventario()', 'finanzas()', 'personalizados()', 'exportar()']
    },
    {
        id: 'configuracion',
        title: 'CONFIGURACIÓN',
        icon: 'cog',
        items: ['usuarios()', 'permisos()', 'empresa()', 'integraciones()', 'backup()']
    },
    {
        id: 'ayuda',
        title: 'AYUDA',
        icon: 'question-circle',
        items: ['manual()', 'soporte()', 'actualizaciones()', 'acerca_de()']
    }
];

// Función para crear los elementos del menú
function createMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    
    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.id = item.id;
        
        menuItem.innerHTML = `
            <i class="fas fa-${item.icon}"></i>
            <h3>${item.title}</h3>
            <ul class="submenu">
                ${item.items.map(subItem => `<li>${subItem}</li>`).join('')}
            </ul>
        `;
        
        menuGrid.appendChild(menuItem);
        
        // Añadir evento de clic
        menuItem.addEventListener('click', () => {
            // Aquí iría la lógica para abrir la sección correspondiente
            console.log(`Abriendo: ${item.title}`);
            menuItem.style.transform = 'scale(0.98)';
            setTimeout(() => {
                menuItem.style.transform = '';
            }, 150);
        });
    });
}

// Inicializar el menú cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    createMenu();
    
    // Simular estado de conexión
    const statusIndicator = document.querySelector('.status-indicator');
    setInterval(() => {
        statusIndicator.style.animation = 'none';
        statusIndicator.offsetHeight; // Trigger reflow
        statusIndicator.style.animation = 'pulse 2s infinite';
    }, 5000);
    
    // Manejar teclas rápidas
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'F1':
                e.preventDefault();
                console.log('Mostrando ayuda');
                break;
            case 'F2':
                e.preventDefault();
                console.log('Nueva venta');
                break;
            case 'F5':
                if (!e.ctrlKey && !e.shiftKey) {
                    e.preventDefault();
                    console.log('Actualizando...');
                }
                break;
            case 'Escape':
                console.log('Saliendo...');
                break;
        }
    });
});
