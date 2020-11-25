package chain

import (
	"github.com/iotaledger/wasp/packages/coretypes"
	"github.com/iotaledger/wasp/tools/wwallet/config"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
)

var chainAlias string

func GetChainAlias() string {
	if chainAlias == "" {
		chainAlias = viper.GetString("chain")
	}
	if chainAlias == "" {
		panic("No current chain. Call `chain deploy` or `set chain <id>`")
	}
	return chainAlias
}

func SetCurrentChain(chainAlias string) {
	config.Set("chain", chainAlias)
}

func initAliasFlags(flags *pflag.FlagSet) {
	flags.StringVarP(&chainAlias, "chain", "a", "", "chain alias")
}

func AddChainAlias(chainAlias string, id string) {
	config.Set("chains."+chainAlias, id)
	SetCurrentChain(chainAlias)
}

func GetCurrentChainID() coretypes.ChainID {
	chid, err := coretypes.NewChainIDFromBase58(viper.GetString("chains." + GetChainAlias()))
	check(err)
	return chid
}
