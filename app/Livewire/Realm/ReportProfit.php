<?php

namespace App\Livewire\Realm;

use Carbon\Carbon;
use App\Models\Invoice;
use Livewire\Component;

class ReportProfit extends Component
{
    public $date;

    public $rows = [];
    public $total_profit;
    
    public function generate()
    {
        $this->validate([
            'date' => 'required'
        ]);
        try {
            $this->total_profit = 0;
            $dateRange = $this->date;
            $explode = explode(' - ', $dateRange);
            $startDate = date('Y-m-d H:i:s', strtotime($explode[0]));
            $endDate = date('Y-m-d H:i:s', strtotime($explode[1]));
            $result = Invoice::with(['harga', 'digiflazz', 'user.role'])->whereBetween('created_at', [$startDate, $endDate])->where('status', 'PAID')->orderBy('id', 'desc')->get();            
            $this->rows = $result;
            foreach($this->rows as $row) {
                $this->total_profit += $row['profit'];
            }
        } catch (\Exception $e) {
            $this->dispatch('error', $e->getMessage());
        }
    }

    public function render()
    {
        return view('livewire.realm.report-profit');
    }
}
